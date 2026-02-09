export type Thing185<T> = T extends infer U ? U[] : never;

export const value185: Thing185<number> = [185];
