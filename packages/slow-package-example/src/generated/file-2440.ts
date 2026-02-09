export type Thing2440<T> = T extends infer U ? U[] : never;

export const value2440: Thing2440<number> = [2440];
