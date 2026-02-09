export type Thing1071<T> = T extends infer U ? U[] : never;

export const value1071: Thing1071<number> = [1071];
