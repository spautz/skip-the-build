export type Thing1821<T> = T extends infer U ? U[] : never;

export const value1821: Thing1821<number> = [1821];
