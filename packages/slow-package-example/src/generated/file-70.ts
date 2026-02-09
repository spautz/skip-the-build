export type Thing70<T> = T extends infer U ? U[] : never;

export const value70: Thing70<number> = [70];
