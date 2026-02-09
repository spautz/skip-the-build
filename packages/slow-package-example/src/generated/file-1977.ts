export type Thing1977<T> = T extends infer U ? U[] : never;

export const value1977: Thing1977<number> = [1977];
