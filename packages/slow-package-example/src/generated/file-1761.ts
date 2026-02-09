export type Thing1761<T> = T extends infer U ? U[] : never;

export const value1761: Thing1761<number> = [1761];
