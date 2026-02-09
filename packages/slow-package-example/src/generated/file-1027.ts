export type Thing1027<T> = T extends infer U ? U[] : never;

export const value1027: Thing1027<number> = [1027];
