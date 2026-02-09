export type Thing2621<T> = T extends infer U ? U[] : never;

export const value2621: Thing2621<number> = [2621];
