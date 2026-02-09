export type Thing1355<T> = T extends infer U ? U[] : never;

export const value1355: Thing1355<number> = [1355];
