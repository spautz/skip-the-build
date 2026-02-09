export type Thing2321<T> = T extends infer U ? U[] : never;

export const value2321: Thing2321<number> = [2321];
