export type Thing1491<T> = T extends infer U ? U[] : never;

export const value1491: Thing1491<number> = [1491];
