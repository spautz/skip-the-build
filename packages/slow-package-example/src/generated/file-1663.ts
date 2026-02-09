export type Thing1663<T> = T extends infer U ? U[] : never;

export const value1663: Thing1663<number> = [1663];
