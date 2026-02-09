export type Thing641<T> = T extends infer U ? U[] : never;

export const value641: Thing641<number> = [641];
