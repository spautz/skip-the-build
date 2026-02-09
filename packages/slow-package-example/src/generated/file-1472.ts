export type Thing1472<T> = T extends infer U ? U[] : never;

export const value1472: Thing1472<number> = [1472];
