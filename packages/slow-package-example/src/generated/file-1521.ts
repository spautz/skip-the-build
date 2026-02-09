export type Thing1521<T> = T extends infer U ? U[] : never;

export const value1521: Thing1521<number> = [1521];
