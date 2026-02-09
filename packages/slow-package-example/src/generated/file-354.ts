export type Thing354<T> = T extends infer U ? U[] : never;

export const value354: Thing354<number> = [354];
