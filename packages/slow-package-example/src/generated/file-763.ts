export type Thing763<T> = T extends infer U ? U[] : never;

export const value763: Thing763<number> = [763];
