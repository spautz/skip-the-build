export type Thing481<T> = T extends infer U ? U[] : never;

export const value481: Thing481<number> = [481];
