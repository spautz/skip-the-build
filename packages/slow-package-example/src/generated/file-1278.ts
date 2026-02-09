export type Thing1278<T> = T extends infer U ? U[] : never;

export const value1278: Thing1278<number> = [1278];
