export type Thing1234<T> = T extends infer U ? U[] : never;

export const value1234: Thing1234<number> = [1234];
