export type Thing1482<T> = T extends infer U ? U[] : never;

export const value1482: Thing1482<number> = [1482];
