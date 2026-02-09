export type Thing1402<T> = T extends infer U ? U[] : never;

export const value1402: Thing1402<number> = [1402];
