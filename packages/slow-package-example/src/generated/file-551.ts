export type Thing551<T> = T extends infer U ? U[] : never;

export const value551: Thing551<number> = [551];
