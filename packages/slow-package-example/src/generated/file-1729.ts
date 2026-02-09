export type Thing1729<T> = T extends infer U ? U[] : never;

export const value1729: Thing1729<number> = [1729];
