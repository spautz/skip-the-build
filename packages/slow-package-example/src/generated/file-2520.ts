export type Thing2520<T> = T extends infer U ? U[] : never;

export const value2520: Thing2520<number> = [2520];
