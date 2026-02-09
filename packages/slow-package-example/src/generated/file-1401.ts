export type Thing1401<T> = T extends infer U ? U[] : never;

export const value1401: Thing1401<number> = [1401];
