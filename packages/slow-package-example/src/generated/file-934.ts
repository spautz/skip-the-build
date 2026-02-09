export type Thing934<T> = T extends infer U ? U[] : never;

export const value934: Thing934<number> = [934];
