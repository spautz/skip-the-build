export type Thing1495<T> = T extends infer U ? U[] : never;

export const value1495: Thing1495<number> = [1495];
