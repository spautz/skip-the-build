export type Thing812<T> = T extends infer U ? U[] : never;

export const value812: Thing812<number> = [812];
