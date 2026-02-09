export type Thing1868<T> = T extends infer U ? U[] : never;

export const value1868: Thing1868<number> = [1868];
