export type Thing1514<T> = T extends infer U ? U[] : never;

export const value1514: Thing1514<number> = [1514];
