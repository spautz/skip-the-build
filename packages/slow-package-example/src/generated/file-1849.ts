export type Thing1849<T> = T extends infer U ? U[] : never;

export const value1849: Thing1849<number> = [1849];
