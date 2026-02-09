export type Thing2035<T> = T extends infer U ? U[] : never;

export const value2035: Thing2035<number> = [2035];
