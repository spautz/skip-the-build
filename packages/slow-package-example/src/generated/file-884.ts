export type Thing884<T> = T extends infer U ? U[] : never;

export const value884: Thing884<number> = [884];
