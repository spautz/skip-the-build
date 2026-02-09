export type Thing854<T> = T extends infer U ? U[] : never;

export const value854: Thing854<number> = [854];
