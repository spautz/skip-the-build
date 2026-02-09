export type Thing2145<T> = T extends infer U ? U[] : never;

export const value2145: Thing2145<number> = [2145];
