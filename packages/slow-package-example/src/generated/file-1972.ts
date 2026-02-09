export type Thing1972<T> = T extends infer U ? U[] : never;

export const value1972: Thing1972<number> = [1972];
