export type Thing72<T> = T extends infer U ? U[] : never;

export const value72: Thing72<number> = [72];
