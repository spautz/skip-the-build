export type Thing64<T> = T extends infer U ? U[] : never;

export const value64: Thing64<number> = [64];
