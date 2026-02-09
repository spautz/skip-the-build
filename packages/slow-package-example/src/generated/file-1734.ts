export type Thing1734<T> = T extends infer U ? U[] : never;

export const value1734: Thing1734<number> = [1734];
