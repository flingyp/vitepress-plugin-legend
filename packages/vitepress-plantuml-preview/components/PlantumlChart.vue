<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from 'vue';
import { useCopyContent } from '@flypeng/tool/browser';
import { snapdom } from '@zumer/snapdom';
import { UseFullscreen } from '@vueuse/components';
import { Toaster, toast } from 'vue-sonner';
import { Icon } from '@iconify/vue';
import 'vue-sonner/style.css';
import { DEFAULT_PLANTUML_SERVER_BASE } from '../types';
import { buildPlantumlRenderUrl } from '../utils/build-url';

interface PlantumlChartProps {
  code?: string;
  showToolbar?: '0' | '1';
}

const props = withDefaults(defineProps<PlantumlChartProps>(), {
  code: '',
  showToolbar: '0',
});

function safeDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

const renderCode = computed(() => safeDecodeURIComponent(props.code || ''));

const chartUrl = computed(() => {
  if (!renderCode.value.trim()) return '';
  return buildPlantumlRenderUrl(
    renderCode.value,
    DEFAULT_PLANTUML_SERVER_BASE,
    'svg',
  );
});

const loadError = ref('');
const plantumlRef = ref<HTMLElement>();
const minZoom = 0.2;
const maxZoom = 4;
const zoomLevel = ref(1);
const dragOffset = ref({ x: 0, y: 0 });
const dragStart = ref({ x: 0, y: 0 });
const isDragging = ref(false);

function chartTargetEl(): HTMLImageElement | null {
  return plantumlRef.value?.querySelector('img') ?? null;
}

function updateChartTransform() {
  const el = chartTargetEl();
  if (el) {
    el.style.transform = `translate(${dragOffset.value.x}px, ${dragOffset.value.y}px) scale(${zoomLevel.value})`;
  }
}

/**
 * 使用 Pointer Events + capture：与 Mermaid/Infographic 的 window 鼠标监听等价，
 * 但 `<img>` 会触发原生拖拽，导致漏掉 mouseup、松开后仍跟手平移；capture 保证在元素上收到 pointerup/cancel。
 */
function onChartPointerDown(e: PointerEvent) {
  if (e.button !== 0) return;
  e.preventDefault();
  const imgHit = chartTargetEl();
  if (!imgHit) return;
  const panImg: HTMLImageElement = imgHit;

  isDragging.value = true;
  dragStart.value = { x: e.clientX, y: e.clientY };
  document.body.style.userSelect = 'none';
  const { x, y } = dragOffset.value;

  let captured = false;
  try {
    panImg.setPointerCapture(e.pointerId);
    captured = true;
  } catch {
    /* ignore */
  }

  function onPointerMove(ev: PointerEvent) {
    if (!isDragging.value) return;
    const dx = ev.clientX - dragStart.value.x;
    const dy = ev.clientY - dragStart.value.y;
    dragOffset.value = { x: x + dx, y: y + dy };
    updateChartTransform();
  }

  function endPan(ev: PointerEvent) {
    if (!isDragging.value) return;
    isDragging.value = false;
    document.body.style.userSelect = '';
    if (captured) {
      try {
        panImg.releasePointerCapture(ev.pointerId);
      } catch {
        /* ignore */
      }
    }
    panImg.removeEventListener('pointermove', onPointerMove);
    panImg.removeEventListener('pointerup', endPan);
    panImg.removeEventListener('pointercancel', endPan);
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', endPan);
    document.removeEventListener('pointercancel', endPan);
  }

  panImg.addEventListener('pointermove', onPointerMove);
  panImg.addEventListener('pointerup', endPan);
  panImg.addEventListener('pointercancel', endPan);
  if (!captured) {
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', endPan);
    document.addEventListener('pointercancel', endPan);
  }
}

function bindChartInteractions() {
  nextTick(() => {
    const el = chartTargetEl();
    if (el) {
      el.style.cursor = 'grab';
      el.style.transformOrigin = 'center center';
      el.style.touchAction = 'none';
      el.onpointerdown = onChartPointerDown;
      updateChartTransform();
    }
  });
}

function onPlantumlImgLoad() {
  bindChartInteractions();
}

/** 同步校验 URL；拖拽与缩放绑定在图片 @load 后执行（避免重复绑定与未解码尺寸） */
function syncChartState() {
  loadError.value = '';
  if (!chartUrl.value) {
    loadError.value = '无效的 PlantUML 内容或服务地址';
  }
}

function clampZoom(level: number) {
  return Math.min(maxZoom, Math.max(minZoom, level));
}

function zoomIn() {
  zoomLevel.value = clampZoom(zoomLevel.value * 1.1);
  updateChartTransform();
}

function zoomOut() {
  zoomLevel.value = clampZoom(zoomLevel.value / 1.1);
  updateChartTransform();
}

function fit() {
  zoomLevel.value = 1;
  dragOffset.value = { x: 0, y: 0 };
  updateChartTransform();
}

function onWheelZoom(e: WheelEvent) {
  if (!plantumlRef.value) return;
  e.preventDefault();
  const containerRect = plantumlRef.value.getBoundingClientRect();
  const originX = e.clientX - containerRect.left;
  const originY = e.clientY - containerRect.top;
  const el = chartTargetEl();
  if (el) {
    el.style.transformOrigin = `${originX}px ${originY}px`;
  }
  const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
  zoomLevel.value = clampZoom(zoomLevel.value * factor);
  updateChartTransform();
}

async function downloadChart() {
  if (!plantumlRef.value) return;
  try {
    const result = await snapdom(plantumlRef.value, {
      scale: 2,
      quality: 1,
      backgroundColor: getComputedStyle(
        document.documentElement,
      ).getPropertyValue('--vp-c-bg-soft'),
    });
    await result.download({ format: 'png', filename: 'plantuml-chart' });
    toast.success('图表下载成功！');
  } catch (error) {
    console.error('下载失败:', error);
    toast.error('下载失败，请重试');
  }
}

function onPlantumlImgError() {
  loadError.value =
    '图表加载失败（服务端错误或语法无效）。请检查 PlantUML 源码。';
}

async function copyCode() {
  if (!renderCode.value) return;
  try {
    useCopyContent(renderCode.value);
    toast.success('代码复制成功！');
  } catch (error) {
    console.error('复制失败:', error);
    toast.error('复制失败，请重试');
  }
}

watch(
  () => props.code,
  () => {
    fit();
    syncChartState();
  },
  { immediate: true },
);

onMounted(() => {
  void nextTick(() => {
    plantumlRef.value?.addEventListener('wheel', onWheelZoom, {
      passive: false,
    });
  });
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', fit);
  }
});

onBeforeUnmount(() => {
  plantumlRef.value?.removeEventListener('wheel', onWheelZoom);
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', fit);
  }
});
</script>

<template>
  <div class="plantuml-container">
    <UseFullscreen v-slot="{ toggle, isFullscreen }">
      <div
        ref="plantumlRef"
        :class="['plantuml', isFullscreen && 'plantuml-fullscreen']"
      >
        <p v-if="loadError" class="plantuml-error">{{ loadError }}</p>
        <img
          v-else-if="chartUrl"
          :src="chartUrl"
          alt="PlantUML 图表"
          class="plantuml-img"
          draggable="false"
          decoding="async"
          referrerpolicy="no-referrer"
          @load="onPlantumlImgLoad"
          @error="onPlantumlImgError"
        />
      </div>
      <div
        v-show="props.showToolbar === '1'"
        class="plantuml-toolbar"
        role="toolbar"
        aria-label="PlantUML 图表工具栏"
      >
        <button
          class="toolbar-btn"
          type="button"
          title="放大"
          aria-label="放大"
          @click="zoomIn"
        >
          <Icon icon="lucide:zoom-in" aria-hidden="true" />
        </button>
        <button
          class="toolbar-btn"
          type="button"
          title="缩小"
          aria-label="缩小"
          @click="zoomOut"
        >
          <Icon icon="lucide:zoom-out" aria-hidden="true" />
        </button>
        <button
          class="toolbar-btn"
          type="button"
          title="适应屏幕"
          aria-label="适应屏幕"
          @click="fit"
        >
          <Icon icon="lucide:maximize-2" aria-hidden="true" />
        </button>
        <button
          class="toolbar-btn"
          type="button"
          title="复制代码"
          aria-label="复制代码"
          @click="copyCode"
        >
          <Icon icon="lucide:copy" aria-hidden="true" />
        </button>
        <button
          class="toolbar-btn"
          type="button"
          title="下载图表"
          aria-label="下载图表"
          @click="downloadChart"
        >
          <Icon icon="lucide:download" aria-hidden="true" />
        </button>
        <button
          class="toolbar-btn"
          type="button"
          title="全屏"
          aria-label="全屏"
          @click="toggle"
        >
          <Icon
            :icon="isFullscreen ? 'lucide:minimize-2' : 'lucide:maximize'"
            aria-hidden="true"
          />
        </button>
      </div>
    </UseFullscreen>
  </div>
  <Toaster position="top-right" rich-colors />
</template>

<style lang="scss">
/**
 * 固有尺寸由 PlantUML 服务端决定（URL 仅编码源码）。用 max-width + max-height + auto 等比落入可视区。
 * 固定走官方 PlantUML Server 的 SVG 输出。
 */
.plantuml {
  --plantuml-img-max-h: min(480px, 62vh);

  & > .plantuml-img {
    display: block;
    box-sizing: border-box;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: var(--plantuml-img-max-h);
    margin: 0 auto;
    object-fit: contain;
    object-position: center center;
    transition: transform 0.3s ease;
  }
}
</style>

<style lang="scss" scoped>
.plantuml-container {
  position: relative;

  &:hover .plantuml-toolbar {
    opacity: 1;
  }
}

.plantuml {
  width: 100%;
  min-height: 200px;
  margin: 16px 0;
  padding: 12px;
  overflow: auto;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition:
    background-color 0.5s,
    border-color 0.5s;
}

.plantuml-error {
  margin: 0;
  padding: 12px;
  color: var(--vp-c-danger-1, #f43f5e);
  font-size: 0.9rem;
  line-height: 1.5;
}

.plantuml-toolbar {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 10;
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  opacity: 0;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    transform: translateY(-2px);
    opacity: 1;
  }
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  font-size: 1.1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  :deep(svg) {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}

.plantuml-fullscreen {
  --plantuml-img-max-h: calc(100vh - 24px);

  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 12px;
  background: var(--vp-c-bg-soft);
  inset: 0;

  & > .plantuml-img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: var(--plantuml-img-max-h);
    object-fit: contain;
  }
}
</style>
