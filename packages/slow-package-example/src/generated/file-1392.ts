export type Thing1392<T> = T extends infer U ? U[] : never;

export const value1392: Thing1392<number> = [1392];
