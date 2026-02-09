export type Thing1092<T> = T extends infer U ? U[] : never;

export const value1092: Thing1092<number> = [1092];
