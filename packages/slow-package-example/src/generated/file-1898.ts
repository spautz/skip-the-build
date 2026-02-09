export type Thing1898<T> = T extends infer U ? U[] : never;

export const value1898: Thing1898<number> = [1898];
