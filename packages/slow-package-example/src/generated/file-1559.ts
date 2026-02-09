export type Thing1559<T> = T extends infer U ? U[] : never;

export const value1559: Thing1559<number> = [1559];
