export type Thing131<T> = T extends infer U ? U[] : never;

export const value131: Thing131<number> = [131];
