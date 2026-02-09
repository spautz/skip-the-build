export type Thing1947<T> = T extends infer U ? U[] : never;

export const value1947: Thing1947<number> = [1947];
