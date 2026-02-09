export type Thing365<T> = T extends infer U ? U[] : never;

export const value365: Thing365<number> = [365];
