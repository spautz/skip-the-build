export type Thing2181<T> = T extends infer U ? U[] : never;

export const value2181: Thing2181<number> = [2181];
