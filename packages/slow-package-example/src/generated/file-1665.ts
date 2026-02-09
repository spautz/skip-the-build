export type Thing1665<T> = T extends infer U ? U[] : never;

export const value1665: Thing1665<number> = [1665];
