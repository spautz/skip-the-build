export type Thing1517<T> = T extends infer U ? U[] : never;

export const value1517: Thing1517<number> = [1517];
