export type Thing1218<T> = T extends infer U ? U[] : never;

export const value1218: Thing1218<number> = [1218];
