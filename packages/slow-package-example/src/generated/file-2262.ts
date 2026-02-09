export type Thing2262<T> = T extends infer U ? U[] : never;

export const value2262: Thing2262<number> = [2262];
