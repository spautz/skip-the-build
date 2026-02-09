export type Thing1828<T> = T extends infer U ? U[] : never;

export const value1828: Thing1828<number> = [1828];
