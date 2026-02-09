export type Thing1881<T> = T extends infer U ? U[] : never;

export const value1881: Thing1881<number> = [1881];
