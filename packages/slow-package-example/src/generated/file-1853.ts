export type Thing1853<T> = T extends infer U ? U[] : never;

export const value1853: Thing1853<number> = [1853];
