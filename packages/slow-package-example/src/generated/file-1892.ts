export type Thing1892<T> = T extends infer U ? U[] : never;

export const value1892: Thing1892<number> = [1892];
