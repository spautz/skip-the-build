export type Thing1056<T> = T extends infer U ? U[] : never;

export const value1056: Thing1056<number> = [1056];
