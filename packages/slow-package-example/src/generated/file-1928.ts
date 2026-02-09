export type Thing1928<T> = T extends infer U ? U[] : never;

export const value1928: Thing1928<number> = [1928];
