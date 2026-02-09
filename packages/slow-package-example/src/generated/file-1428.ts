export type Thing1428<T> = T extends infer U ? U[] : never;

export const value1428: Thing1428<number> = [1428];
