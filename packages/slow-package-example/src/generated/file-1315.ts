export type Thing1315<T> = T extends infer U ? U[] : never;

export const value1315: Thing1315<number> = [1315];
