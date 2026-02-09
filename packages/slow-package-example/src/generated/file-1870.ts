export type Thing1870<T> = T extends infer U ? U[] : never;

export const value1870: Thing1870<number> = [1870];
