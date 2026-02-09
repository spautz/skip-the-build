export type Thing1227<T> = T extends infer U ? U[] : never;

export const value1227: Thing1227<number> = [1227];
