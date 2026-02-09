export type Thing1099<T> = T extends infer U ? U[] : never;

export const value1099: Thing1099<number> = [1099];
