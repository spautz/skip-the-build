export type Thing1432<T> = T extends infer U ? U[] : never;

export const value1432: Thing1432<number> = [1432];
