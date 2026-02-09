export type Thing327<T> = T extends infer U ? U[] : never;

export const value327: Thing327<number> = [327];
