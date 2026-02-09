export type Thing2627<T> = T extends infer U ? U[] : never;

export const value2627: Thing2627<number> = [2627];
