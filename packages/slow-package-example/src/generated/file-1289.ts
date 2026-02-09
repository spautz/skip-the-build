export type Thing1289<T> = T extends infer U ? U[] : never;

export const value1289: Thing1289<number> = [1289];
