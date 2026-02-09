export type Thing1643<T> = T extends infer U ? U[] : never;

export const value1643: Thing1643<number> = [1643];
