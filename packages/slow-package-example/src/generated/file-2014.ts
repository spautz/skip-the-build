export type Thing2014<T> = T extends infer U ? U[] : never;

export const value2014: Thing2014<number> = [2014];
