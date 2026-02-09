export type Thing1415<T> = T extends infer U ? U[] : never;

export const value1415: Thing1415<number> = [1415];
