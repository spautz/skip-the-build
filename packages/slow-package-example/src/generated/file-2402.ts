export type Thing2402<T> = T extends infer U ? U[] : never;

export const value2402: Thing2402<number> = [2402];
