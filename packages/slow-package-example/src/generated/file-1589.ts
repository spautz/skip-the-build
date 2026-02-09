export type Thing1589<T> = T extends infer U ? U[] : never;

export const value1589: Thing1589<number> = [1589];
