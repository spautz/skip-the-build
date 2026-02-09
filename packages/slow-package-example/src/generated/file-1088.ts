export type Thing1088<T> = T extends infer U ? U[] : never;

export const value1088: Thing1088<number> = [1088];
