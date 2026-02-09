export type Thing1705<T> = T extends infer U ? U[] : never;

export const value1705: Thing1705<number> = [1705];
