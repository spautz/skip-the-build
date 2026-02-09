export type Thing1467<T> = T extends infer U ? U[] : never;

export const value1467: Thing1467<number> = [1467];
