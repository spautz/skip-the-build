export type Thing2729<T> = T extends infer U ? U[] : never;

export const value2729: Thing2729<number> = [2729];
