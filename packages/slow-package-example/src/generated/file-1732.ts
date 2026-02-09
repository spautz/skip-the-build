export type Thing1732<T> = T extends infer U ? U[] : never;

export const value1732: Thing1732<number> = [1732];
