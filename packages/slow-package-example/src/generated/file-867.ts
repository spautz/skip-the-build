export type Thing867<T> = T extends infer U ? U[] : never;

export const value867: Thing867<number> = [867];
