export type Thing1553<T> = T extends infer U ? U[] : never;

export const value1553: Thing1553<number> = [1553];
