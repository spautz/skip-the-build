export type Thing1627<T> = T extends infer U ? U[] : never;

export const value1627: Thing1627<number> = [1627];
