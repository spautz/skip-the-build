export type Thing1916<T> = T extends infer U ? U[] : never;

export const value1916: Thing1916<number> = [1916];
