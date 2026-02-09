export type Thing1923<T> = T extends infer U ? U[] : never;

export const value1923: Thing1923<number> = [1923];
