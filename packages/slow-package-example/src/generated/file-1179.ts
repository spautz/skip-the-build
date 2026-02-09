export type Thing1179<T> = T extends infer U ? U[] : never;

export const value1179: Thing1179<number> = [1179];
