export type Thing704<T> = T extends infer U ? U[] : never;

export const value704: Thing704<number> = [704];
