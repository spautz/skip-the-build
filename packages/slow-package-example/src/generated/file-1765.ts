export type Thing1765<T> = T extends infer U ? U[] : never;

export const value1765: Thing1765<number> = [1765];
