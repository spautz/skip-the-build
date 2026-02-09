export type Thing1733<T> = T extends infer U ? U[] : never;

export const value1733: Thing1733<number> = [1733];
