export type Thing145<T> = T extends infer U ? U[] : never;

export const value145: Thing145<number> = [145];
