export type Thing965<T> = T extends infer U ? U[] : never;

export const value965: Thing965<number> = [965];
