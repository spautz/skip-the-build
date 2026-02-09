export type Thing1292<T> = T extends infer U ? U[] : never;

export const value1292: Thing1292<number> = [1292];
