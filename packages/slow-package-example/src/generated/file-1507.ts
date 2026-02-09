export type Thing1507<T> = T extends infer U ? U[] : never;

export const value1507: Thing1507<number> = [1507];
