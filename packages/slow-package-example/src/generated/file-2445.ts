export type Thing2445<T> = T extends infer U ? U[] : never;

export const value2445: Thing2445<number> = [2445];
