export type Thing2213<T> = T extends infer U ? U[] : never;

export const value2213: Thing2213<number> = [2213];
