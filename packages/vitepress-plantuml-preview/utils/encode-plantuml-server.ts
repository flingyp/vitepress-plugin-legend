import { deflateRaw } from 'pako';
import { encodePlantumlSixBit } from './plantuml-encode64';
import { sanitizePlantumlSource } from './sanitize-plantuml-source';

/** deflateRaw 输出转为 encodePlantumlSixBit 所需的「一字节一字符」串 */
function deflateRawToBinaryString(utf8Source: string): string {
  const input = new TextEncoder().encode(utf8Source);
  const deflated = deflateRaw(input, { level: 9 });
  const u8 =
    deflated instanceof Uint8Array
      ? deflated
      : new Uint8Array(deflated as ArrayBuffer);
  let s = '';
  for (let i = 0; i < u8.length; i++) {
    s += String.fromCharCode(u8[i]!);
  }
  return s;
}

/**
 * 与 PlantUML 官网 / Server 常见行为对齐：换行规范化并去掉末尾空白。
 * 需在 {@link sanitizePlantumlSource} 之后调用。
 */
export function normalizePlantumlSourceForEncode(source: string): string {
  return sanitizePlantumlSource(source)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trimEnd();
}

/**
 * 经典 PlantUML Server 路径段编码（plantuml.com / 自建 jar）。
 * 使用 pako deflateRaw + 6bit 编码，避免 plantuml-encoder 在 pako@2 下返回 Uint8Array
 * 与 encode64 不兼容而导致远端渲染错乱。
 */
export function encodePlantumlForPlantumlServer(source: string): string {
  const normalized = normalizePlantumlSourceForEncode(source);
  return encodePlantumlSixBit(deflateRawToBinaryString(normalized));
}
