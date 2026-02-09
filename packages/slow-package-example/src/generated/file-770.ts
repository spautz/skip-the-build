export type Thing770<T> = T extends infer U ? U[] : never;

export const value770: Thing770<number> = [770];
