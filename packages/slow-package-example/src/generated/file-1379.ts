export type Thing1379<T> = T extends infer U ? U[] : never;

export const value1379: Thing1379<number> = [1379];
