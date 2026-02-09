export type Thing2910<T> = T extends infer U ? U[] : never;

export const value2910: Thing2910<number> = [2910];
