export type Thing2314<T> = T extends infer U ? U[] : never;

export const value2314: Thing2314<number> = [2314];
