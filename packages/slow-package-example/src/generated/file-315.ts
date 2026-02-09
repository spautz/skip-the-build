export type Thing315<T> = T extends infer U ? U[] : never;

export const value315: Thing315<number> = [315];
