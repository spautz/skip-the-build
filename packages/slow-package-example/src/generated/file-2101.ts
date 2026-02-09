export type Thing2101<T> = T extends infer U ? U[] : never;

export const value2101: Thing2101<number> = [2101];
