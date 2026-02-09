export type Thing1927<T> = T extends infer U ? U[] : never;

export const value1927: Thing1927<number> = [1927];
