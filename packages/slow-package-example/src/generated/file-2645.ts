export type Thing2645<T> = T extends infer U ? U[] : never;

export const value2645: Thing2645<number> = [2645];
