export type Thing904<T> = T extends infer U ? U[] : never;

export const value904: Thing904<number> = [904];
