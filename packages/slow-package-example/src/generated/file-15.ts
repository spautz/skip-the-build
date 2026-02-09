export type Thing15<T> = T extends infer U ? U[] : never;

export const value15: Thing15<number> = [15];
