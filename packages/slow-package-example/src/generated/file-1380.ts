export type Thing1380<T> = T extends infer U ? U[] : never;

export const value1380: Thing1380<number> = [1380];
