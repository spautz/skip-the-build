export type Thing1595<T> = T extends infer U ? U[] : never;

export const value1595: Thing1595<number> = [1595];
