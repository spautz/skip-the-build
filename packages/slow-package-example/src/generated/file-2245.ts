export type Thing2245<T> = T extends infer U ? U[] : never;

export const value2245: Thing2245<number> = [2245];
