export type Thing1675<T> = T extends infer U ? U[] : never;

export const value1675: Thing1675<number> = [1675];
