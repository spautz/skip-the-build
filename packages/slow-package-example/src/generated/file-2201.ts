export type Thing2201<T> = T extends infer U ? U[] : never;

export const value2201: Thing2201<number> = [2201];
