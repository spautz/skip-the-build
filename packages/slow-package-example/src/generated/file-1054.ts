export type Thing1054<T> = T extends infer U ? U[] : never;

export const value1054: Thing1054<number> = [1054];
