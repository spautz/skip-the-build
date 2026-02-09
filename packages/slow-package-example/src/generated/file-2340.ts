export type Thing2340<T> = T extends infer U ? U[] : never;

export const value2340: Thing2340<number> = [2340];
