export type Thing1968<T> = T extends infer U ? U[] : never;

export const value1968: Thing1968<number> = [1968];
