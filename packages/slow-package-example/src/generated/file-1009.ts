export type Thing1009<T> = T extends infer U ? U[] : never;

export const value1009: Thing1009<number> = [1009];
