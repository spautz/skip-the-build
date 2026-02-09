export type Thing1649<T> = T extends infer U ? U[] : never;

export const value1649: Thing1649<number> = [1649];
