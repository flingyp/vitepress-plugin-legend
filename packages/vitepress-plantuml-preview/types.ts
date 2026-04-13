/** PlantUML 官方在线服务根路径（无末尾斜杠），插件内部固定使用 */
export const DEFAULT_PLANTUML_SERVER_BASE =
  'https://www.plantuml.com/plantuml' as const;

export interface VitepressPlantumlPreviewOptions {
  /**
   * 是否显示工具栏（缩放、适应、复制、下载、全屏）。
   * 未传时默认为 `true`；可传 `false` 全局关闭。
   * 单块代码仍可用 frontmatter `showToolbar: true|false` 覆盖。
   */
  showToolbar?: boolean;
}
