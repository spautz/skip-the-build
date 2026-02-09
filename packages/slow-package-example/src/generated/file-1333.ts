export type Thing1333<T> = T extends infer U ? U[] : never;

export const value1333: Thing1333<number> = [1333];
