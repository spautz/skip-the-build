export type Thing1195<T> = T extends infer U ? U[] : never;

export const value1195: Thing1195<number> = [1195];
