export type Thing1749<T> = T extends infer U ? U[] : never;

export const value1749: Thing1749<number> = [1749];
