export type Thing2130<T> = T extends infer U ? U[] : never;

export const value2130: Thing2130<number> = [2130];
