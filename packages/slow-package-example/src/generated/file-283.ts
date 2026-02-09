export type Thing283<T> = T extends infer U ? U[] : never;

export const value283: Thing283<number> = [283];
