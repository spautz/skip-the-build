export type Thing183<T> = T extends infer U ? U[] : never;

export const value183: Thing183<number> = [183];
