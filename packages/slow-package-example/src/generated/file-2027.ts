export type Thing2027<T> = T extends infer U ? U[] : never;

export const value2027: Thing2027<number> = [2027];
