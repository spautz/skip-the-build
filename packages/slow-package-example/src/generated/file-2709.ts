export type Thing2709<T> = T extends infer U ? U[] : never;

export const value2709: Thing2709<number> = [2709];
