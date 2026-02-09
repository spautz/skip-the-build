export type Thing1962<T> = T extends infer U ? U[] : never;

export const value1962: Thing1962<number> = [1962];
