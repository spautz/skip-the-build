export type Thing2412<T> = T extends infer U ? U[] : never;

export const value2412: Thing2412<number> = [2412];
