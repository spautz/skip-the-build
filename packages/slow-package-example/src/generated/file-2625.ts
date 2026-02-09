export type Thing2625<T> = T extends infer U ? U[] : never;

export const value2625: Thing2625<number> = [2625];
