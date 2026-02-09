export type Thing1597<T> = T extends infer U ? U[] : never;

export const value1597: Thing1597<number> = [1597];
