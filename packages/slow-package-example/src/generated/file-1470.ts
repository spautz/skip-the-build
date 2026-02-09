export type Thing1470<T> = T extends infer U ? U[] : never;

export const value1470: Thing1470<number> = [1470];
