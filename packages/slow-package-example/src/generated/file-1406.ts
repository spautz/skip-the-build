export type Thing1406<T> = T extends infer U ? U[] : never;

export const value1406: Thing1406<number> = [1406];
