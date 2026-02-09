export type Thing2205<T> = T extends infer U ? U[] : never;

export const value2205: Thing2205<number> = [2205];
