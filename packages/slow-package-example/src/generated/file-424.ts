export type Thing424<T> = T extends infer U ? U[] : never;

export const value424: Thing424<number> = [424];
