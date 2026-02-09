export type Thing250<T> = T extends infer U ? U[] : never;

export const value250: Thing250<number> = [250];
