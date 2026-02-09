export type Thing1481<T> = T extends infer U ? U[] : never;

export const value1481: Thing1481<number> = [1481];
