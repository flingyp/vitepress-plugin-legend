import { encodePlantumlForPlantumlServer } from './encode-plantuml-server';

export function normalizeServerBase(url: string): string {
  return url.replace(/\/+$/, '');
}

/**
 * 生成 PlantUML Server 的 GET 渲染 URL（官方 ~1 编码）。
 * 源码清洗在 {@link encodePlantumlForPlantumlServer} 内完成，此处不重复处理。
 */
export function buildPlantumlRenderUrl(
  source: string,
  serverBase: string,
  format: 'svg' | 'png',
): string {
  const base = normalizeServerBase(serverBase);
  const encoded = encodePlantumlForPlantumlServer(source);
  if (format === 'png') {
    return `${base}/png/${encoded}`;
  }
  return `${base}/svg/${encoded}`;
}
