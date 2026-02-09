export type Thing822<T> = T extends infer U ? U[] : never;

export const value822: Thing822<number> = [822];
