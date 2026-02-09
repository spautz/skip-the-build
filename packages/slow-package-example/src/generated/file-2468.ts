export type Thing2468<T> = T extends infer U ? U[] : never;

export const value2468: Thing2468<number> = [2468];
