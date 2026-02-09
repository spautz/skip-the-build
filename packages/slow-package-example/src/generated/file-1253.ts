export type Thing1253<T> = T extends infer U ? U[] : never;

export const value1253: Thing1253<number> = [1253];
