export type Thing1583<T> = T extends infer U ? U[] : never;

export const value1583: Thing1583<number> = [1583];
