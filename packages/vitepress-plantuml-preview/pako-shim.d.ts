declare module 'pako' {
  export function deflateRaw(
    data: Uint8Array | ArrayBuffer,
    options?: { level?: number },
  ): Uint8Array;
}
