export type Thing2080<T> = T extends infer U ? U[] : never;

export const value2080: Thing2080<number> = [2080];
