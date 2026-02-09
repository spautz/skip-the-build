export type Thing2110<T> = T extends infer U ? U[] : never;

export const value2110: Thing2110<number> = [2110];
