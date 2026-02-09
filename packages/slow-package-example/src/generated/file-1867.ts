export type Thing1867<T> = T extends infer U ? U[] : never;

export const value1867: Thing1867<number> = [1867];
