export type Thing2221<T> = T extends infer U ? U[] : never;

export const value2221: Thing2221<number> = [2221];
