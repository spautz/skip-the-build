export type Thing2029<T> = T extends infer U ? U[] : never;

export const value2029: Thing2029<number> = [2029];
