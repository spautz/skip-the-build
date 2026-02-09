export type Thing1860<T> = T extends infer U ? U[] : never;

export const value1860: Thing1860<number> = [1860];
