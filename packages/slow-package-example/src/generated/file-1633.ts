export type Thing1633<T> = T extends infer U ? U[] : never;

export const value1633: Thing1633<number> = [1633];
