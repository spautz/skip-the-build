export type Thing1051<T> = T extends infer U ? U[] : never;

export const value1051: Thing1051<number> = [1051];
