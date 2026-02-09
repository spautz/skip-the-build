export type Thing1000<T> = T extends infer U ? U[] : never;

export const value1000: Thing1000<number> = [1000];
