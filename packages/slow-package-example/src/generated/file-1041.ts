export type Thing1041<T> = T extends infer U ? U[] : never;

export const value1041: Thing1041<number> = [1041];
