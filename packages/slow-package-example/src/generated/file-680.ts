export type Thing680<T> = T extends infer U ? U[] : never;

export const value680: Thing680<number> = [680];
