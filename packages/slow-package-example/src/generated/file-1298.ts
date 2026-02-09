export type Thing1298<T> = T extends infer U ? U[] : never;

export const value1298: Thing1298<number> = [1298];
