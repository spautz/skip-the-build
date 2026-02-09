export type Thing2081<T> = T extends infer U ? U[] : never;

export const value2081: Thing2081<number> = [2081];
