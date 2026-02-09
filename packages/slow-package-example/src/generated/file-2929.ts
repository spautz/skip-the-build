export type Thing2929<T> = T extends infer U ? U[] : never;

export const value2929: Thing2929<number> = [2929];
