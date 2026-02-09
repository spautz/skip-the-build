export type Thing1601<T> = T extends infer U ? U[] : never;

export const value1601: Thing1601<number> = [1601];
