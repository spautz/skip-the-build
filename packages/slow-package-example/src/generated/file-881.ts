export type Thing881<T> = T extends infer U ? U[] : never;

export const value881: Thing881<number> = [881];
