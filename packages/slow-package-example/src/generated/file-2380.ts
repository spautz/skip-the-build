export type Thing2380<T> = T extends infer U ? U[] : never;

export const value2380: Thing2380<number> = [2380];
