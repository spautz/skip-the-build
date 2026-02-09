export type Thing102<T> = T extends infer U ? U[] : never;

export const value102: Thing102<number> = [102];
