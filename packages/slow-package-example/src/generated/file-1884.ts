export type Thing1884<T> = T extends infer U ? U[] : never;

export const value1884: Thing1884<number> = [1884];
