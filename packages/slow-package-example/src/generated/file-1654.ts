export type Thing1654<T> = T extends infer U ? U[] : never;

export const value1654: Thing1654<number> = [1654];
