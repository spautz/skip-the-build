export type Thing541<T> = T extends infer U ? U[] : never;

export const value541: Thing541<number> = [541];
