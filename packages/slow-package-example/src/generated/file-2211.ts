export type Thing2211<T> = T extends infer U ? U[] : never;

export const value2211: Thing2211<number> = [2211];
