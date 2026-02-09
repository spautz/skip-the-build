export type Thing1483<T> = T extends infer U ? U[] : never;

export const value1483: Thing1483<number> = [1483];
