export type Thing2880<T> = T extends infer U ? U[] : never;

export const value2880: Thing2880<number> = [2880];
