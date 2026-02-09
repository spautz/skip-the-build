export type Thing252<T> = T extends infer U ? U[] : never;

export const value252: Thing252<number> = [252];
