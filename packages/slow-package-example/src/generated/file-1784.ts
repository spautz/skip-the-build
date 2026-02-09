export type Thing1784<T> = T extends infer U ? U[] : never;

export const value1784: Thing1784<number> = [1784];
