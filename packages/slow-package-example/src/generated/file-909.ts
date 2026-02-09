export type Thing909<T> = T extends infer U ? U[] : never;

export const value909: Thing909<number> = [909];
