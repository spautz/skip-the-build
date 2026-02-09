export type Thing17<T> = T extends infer U ? U[] : never;

export const value17: Thing17<number> = [17];
