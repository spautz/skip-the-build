export type Thing1858<T> = T extends infer U ? U[] : never;

export const value1858: Thing1858<number> = [1858];
