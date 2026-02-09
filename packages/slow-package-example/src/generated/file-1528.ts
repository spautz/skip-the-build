export type Thing1528<T> = T extends infer U ? U[] : never;

export const value1528: Thing1528<number> = [1528];
