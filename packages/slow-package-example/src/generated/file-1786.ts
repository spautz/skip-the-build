export type Thing1786<T> = T extends infer U ? U[] : never;

export const value1786: Thing1786<number> = [1786];
