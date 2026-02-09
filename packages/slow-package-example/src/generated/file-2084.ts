export type Thing2084<T> = T extends infer U ? U[] : never;

export const value2084: Thing2084<number> = [2084];
