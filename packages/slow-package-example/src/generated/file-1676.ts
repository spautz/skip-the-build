export type Thing1676<T> = T extends infer U ? U[] : never;

export const value1676: Thing1676<number> = [1676];
