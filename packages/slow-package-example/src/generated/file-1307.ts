export type Thing1307<T> = T extends infer U ? U[] : never;

export const value1307: Thing1307<number> = [1307];
