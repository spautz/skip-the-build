export type Thing1817<T> = T extends infer U ? U[] : never;

export const value1817: Thing1817<number> = [1817];
