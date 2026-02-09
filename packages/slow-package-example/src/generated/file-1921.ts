export type Thing1921<T> = T extends infer U ? U[] : never;

export const value1921: Thing1921<number> = [1921];
