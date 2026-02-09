export type Thing421<T> = T extends infer U ? U[] : never;

export const value421: Thing421<number> = [421];
