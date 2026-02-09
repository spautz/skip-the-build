export type Thing1904<T> = T extends infer U ? U[] : never;

export const value1904: Thing1904<number> = [1904];
