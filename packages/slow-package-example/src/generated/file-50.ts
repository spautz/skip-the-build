export type Thing50<T> = T extends infer U ? U[] : never;

export const value50: Thing50<number> = [50];
