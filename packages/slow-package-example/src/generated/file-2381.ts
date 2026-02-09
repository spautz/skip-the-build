export type Thing2381<T> = T extends infer U ? U[] : never;

export const value2381: Thing2381<number> = [2381];
