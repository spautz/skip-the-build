export type Thing2003<T> = T extends infer U ? U[] : never;

export const value2003: Thing2003<number> = [2003];
