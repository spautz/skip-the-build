export type Thing2501<T> = T extends infer U ? U[] : never;

export const value2501: Thing2501<number> = [2501];
