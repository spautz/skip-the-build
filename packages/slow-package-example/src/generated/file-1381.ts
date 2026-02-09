export type Thing1381<T> = T extends infer U ? U[] : never;

export const value1381: Thing1381<number> = [1381];
