export type Thing1704<T> = T extends infer U ? U[] : never;

export const value1704: Thing1704<number> = [1704];
