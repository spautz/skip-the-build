export type Thing2425<T> = T extends infer U ? U[] : never;

export const value2425: Thing2425<number> = [2425];
