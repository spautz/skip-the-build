export type Thing1582<T> = T extends infer U ? U[] : never;

export const value1582: Thing1582<number> = [1582];
