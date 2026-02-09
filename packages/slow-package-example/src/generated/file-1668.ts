export type Thing1668<T> = T extends infer U ? U[] : never;

export const value1668: Thing1668<number> = [1668];
