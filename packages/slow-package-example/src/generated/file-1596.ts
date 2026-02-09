export type Thing1596<T> = T extends infer U ? U[] : never;

export const value1596: Thing1596<number> = [1596];
