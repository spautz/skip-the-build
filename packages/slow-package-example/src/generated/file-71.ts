export type Thing71<T> = T extends infer U ? U[] : never;

export const value71: Thing71<number> = [71];
