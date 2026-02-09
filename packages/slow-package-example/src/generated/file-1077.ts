export type Thing1077<T> = T extends infer U ? U[] : never;

export const value1077: Thing1077<number> = [1077];
