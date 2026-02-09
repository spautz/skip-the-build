export type Thing1201<T> = T extends infer U ? U[] : never;

export const value1201: Thing1201<number> = [1201];
