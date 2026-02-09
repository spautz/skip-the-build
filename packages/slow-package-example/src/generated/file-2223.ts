export type Thing2223<T> = T extends infer U ? U[] : never;

export const value2223: Thing2223<number> = [2223];
