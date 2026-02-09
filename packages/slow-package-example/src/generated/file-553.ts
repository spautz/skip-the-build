export type Thing553<T> = T extends infer U ? U[] : never;

export const value553: Thing553<number> = [553];
