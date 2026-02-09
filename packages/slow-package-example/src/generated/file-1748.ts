export type Thing1748<T> = T extends infer U ? U[] : never;

export const value1748: Thing1748<number> = [1748];
