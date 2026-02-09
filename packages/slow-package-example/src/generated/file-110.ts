export type Thing110<T> = T extends infer U ? U[] : never;

export const value110: Thing110<number> = [110];
