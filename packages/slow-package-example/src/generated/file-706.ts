export type Thing706<T> = T extends infer U ? U[] : never;

export const value706: Thing706<number> = [706];
