export type Thing1925<T> = T extends infer U ? U[] : never;

export const value1925: Thing1925<number> = [1925];
