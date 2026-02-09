export type Thing2206<T> = T extends infer U ? U[] : never;

export const value2206: Thing2206<number> = [2206];
