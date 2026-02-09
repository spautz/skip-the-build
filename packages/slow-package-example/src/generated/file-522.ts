export type Thing522<T> = T extends infer U ? U[] : never;

export const value522: Thing522<number> = [522];
