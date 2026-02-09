export type Thing1695<T> = T extends infer U ? U[] : never;

export const value1695: Thing1695<number> = [1695];
