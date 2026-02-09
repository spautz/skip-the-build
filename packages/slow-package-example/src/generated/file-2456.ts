export type Thing2456<T> = T extends infer U ? U[] : never;

export const value2456: Thing2456<number> = [2456];
