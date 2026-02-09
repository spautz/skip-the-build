export type Thing1852<T> = T extends infer U ? U[] : never;

export const value1852: Thing1852<number> = [1852];
