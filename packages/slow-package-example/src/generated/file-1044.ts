export type Thing1044<T> = T extends infer U ? U[] : never;

export const value1044: Thing1044<number> = [1044];
