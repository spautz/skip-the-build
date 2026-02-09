export type Thing2800<T> = T extends infer U ? U[] : never;

export const value2800: Thing2800<number> = [2800];
