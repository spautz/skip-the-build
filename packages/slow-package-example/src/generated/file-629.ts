export type Thing629<T> = T extends infer U ? U[] : never;

export const value629: Thing629<number> = [629];
