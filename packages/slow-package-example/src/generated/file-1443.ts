export type Thing1443<T> = T extends infer U ? U[] : never;

export const value1443: Thing1443<number> = [1443];
