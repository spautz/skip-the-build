export type Thing1542<T> = T extends infer U ? U[] : never;

export const value1542: Thing1542<number> = [1542];
