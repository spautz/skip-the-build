export type Thing2302<T> = T extends infer U ? U[] : never;

export const value2302: Thing2302<number> = [2302];
