export type Thing63<T> = T extends infer U ? U[] : never;

export const value63: Thing63<number> = [63];
