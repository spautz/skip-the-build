export type Thing2315<T> = T extends infer U ? U[] : never;

export const value2315: Thing2315<number> = [2315];
