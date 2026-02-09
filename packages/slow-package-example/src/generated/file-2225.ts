export type Thing2225<T> = T extends infer U ? U[] : never;

export const value2225: Thing2225<number> = [2225];
