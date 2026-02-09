export type Thing2125<T> = T extends infer U ? U[] : never;

export const value2125: Thing2125<number> = [2125];
