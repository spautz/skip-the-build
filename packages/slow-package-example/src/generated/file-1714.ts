export type Thing1714<T> = T extends infer U ? U[] : never;

export const value1714: Thing1714<number> = [1714];
