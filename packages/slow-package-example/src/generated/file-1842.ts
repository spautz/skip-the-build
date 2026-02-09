export type Thing1842<T> = T extends infer U ? U[] : never;

export const value1842: Thing1842<number> = [1842];
