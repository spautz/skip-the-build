export type Thing1591<T> = T extends infer U ? U[] : never;

export const value1591: Thing1591<number> = [1591];
