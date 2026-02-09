export type Thing1737<T> = T extends infer U ? U[] : never;

export const value1737: Thing1737<number> = [1737];
