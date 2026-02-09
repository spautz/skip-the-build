export type Thing2060<T> = T extends infer U ? U[] : never;

export const value2060: Thing2060<number> = [2060];
