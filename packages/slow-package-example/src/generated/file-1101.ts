export type Thing1101<T> = T extends infer U ? U[] : never;

export const value1101: Thing1101<number> = [1101];
