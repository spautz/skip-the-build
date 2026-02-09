export type Thing1934<T> = T extends infer U ? U[] : never;

export const value1934: Thing1934<number> = [1934];
