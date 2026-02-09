export type Thing1021<T> = T extends infer U ? U[] : never;

export const value1021: Thing1021<number> = [1021];
