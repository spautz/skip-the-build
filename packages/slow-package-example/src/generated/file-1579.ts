export type Thing1579<T> = T extends infer U ? U[] : never;

export const value1579: Thing1579<number> = [1579];
