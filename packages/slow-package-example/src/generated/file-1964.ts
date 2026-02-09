export type Thing1964<T> = T extends infer U ? U[] : never;

export const value1964: Thing1964<number> = [1964];
