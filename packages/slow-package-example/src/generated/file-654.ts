export type Thing654<T> = T extends infer U ? U[] : never;

export const value654: Thing654<number> = [654];
