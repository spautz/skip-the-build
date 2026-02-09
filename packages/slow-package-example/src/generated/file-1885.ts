export type Thing1885<T> = T extends infer U ? U[] : never;

export const value1885: Thing1885<number> = [1885];
