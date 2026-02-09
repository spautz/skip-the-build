export type Thing1785<T> = T extends infer U ? U[] : never;

export const value1785: Thing1785<number> = [1785];
