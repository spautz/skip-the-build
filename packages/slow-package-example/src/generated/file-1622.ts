export type Thing1622<T> = T extends infer U ? U[] : never;

export const value1622: Thing1622<number> = [1622];
