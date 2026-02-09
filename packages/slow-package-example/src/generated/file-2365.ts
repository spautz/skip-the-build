export type Thing2365<T> = T extends infer U ? U[] : never;

export const value2365: Thing2365<number> = [2365];
