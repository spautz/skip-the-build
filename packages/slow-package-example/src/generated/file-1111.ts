export type Thing1111<T> = T extends infer U ? U[] : never;

export const value1111: Thing1111<number> = [1111];
