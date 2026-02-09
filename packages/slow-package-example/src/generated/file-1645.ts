export type Thing1645<T> = T extends infer U ? U[] : never;

export const value1645: Thing1645<number> = [1645];
