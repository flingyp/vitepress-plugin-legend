/**
 * 是否符合 XML 1.0 规范的 Char（文本节点安全），避免 PlantUML 生成 SVG 时 SAX 报错（如 Unicode 0x1）。
 * @see https://www.w3.org/TR/xml/#charsets
 */
function isXml10Char(codePoint: number): boolean {
  return (
    codePoint === 0x9 ||
    codePoint === 0xa ||
    codePoint === 0xd ||
    (codePoint >= 0x20 && codePoint <= 0xd7ff) ||
    (codePoint >= 0xe000 && codePoint <= 0xfffd) ||
    (codePoint >= 0x10000 && codePoint <= 0x10ffff)
  );
}

/**
 * 去掉 BOM，并剔除所有非 XML 1.0 Char 的码点（含 C0 控制符 U+0001、孤立的代理项等）。
 */
export function sanitizePlantumlSource(source: string): string {
  if (!source) {
    return source;
  }
  const s = source.replace(/^\uFEFF/, '');
  let out = '';
  for (let i = 0; i < s.length; ) {
    const cp = s.codePointAt(i)!;
    const w = cp > 0xffff ? 2 : 1;
    if (isXml10Char(cp)) {
      out += String.fromCodePoint(cp);
    }
    i += w;
  }
  return out;
}
