export type Thing1846<T> = T extends infer U ? U[] : never;

export const value1846: Thing1846<number> = [1846];
