export type Thing216<T> = T extends infer U ? U[] : never;

export const value216: Thing216<number> = [216];
