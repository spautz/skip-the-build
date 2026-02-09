export type Thing1085<T> = T extends infer U ? U[] : never;

export const value1085: Thing1085<number> = [1085];
