export type Thing1723<T> = T extends infer U ? U[] : never;

export const value1723: Thing1723<number> = [1723];
