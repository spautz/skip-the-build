export type Thing1003<T> = T extends infer U ? U[] : never;

export const value1003: Thing1003<number> = [1003];
