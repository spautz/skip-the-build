export type Thing1131<T> = T extends infer U ? U[] : never;

export const value1131: Thing1131<number> = [1131];
