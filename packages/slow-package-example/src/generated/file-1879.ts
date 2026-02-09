export type Thing1879<T> = T extends infer U ? U[] : never;

export const value1879: Thing1879<number> = [1879];
