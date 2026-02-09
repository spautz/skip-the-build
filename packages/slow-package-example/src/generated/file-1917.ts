export type Thing1917<T> = T extends infer U ? U[] : never;

export const value1917: Thing1917<number> = [1917];
