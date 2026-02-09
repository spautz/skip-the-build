export type Thing2105<T> = T extends infer U ? U[] : never;

export const value2105: Thing2105<number> = [2105];
