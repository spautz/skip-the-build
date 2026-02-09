export type Thing1468<T> = T extends infer U ? U[] : never;

export const value1468: Thing1468<number> = [1468];
