export type Thing1214<T> = T extends infer U ? U[] : never;

export const value1214: Thing1214<number> = [1214];
