export type Thing2280<T> = T extends infer U ? U[] : never;

export const value2280: Thing2280<number> = [2280];
