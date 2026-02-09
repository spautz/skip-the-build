export type Thing2008<T> = T extends infer U ? U[] : never;

export const value2008: Thing2008<number> = [2008];
