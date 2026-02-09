export type Thing2234<T> = T extends infer U ? U[] : never;

export const value2234: Thing2234<number> = [2234];
