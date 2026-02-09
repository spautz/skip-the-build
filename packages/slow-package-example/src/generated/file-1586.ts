export type Thing1586<T> = T extends infer U ? U[] : never;

export const value1586: Thing1586<number> = [1586];
