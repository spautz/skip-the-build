export type Thing1625<T> = T extends infer U ? U[] : never;

export const value1625: Thing1625<number> = [1625];
