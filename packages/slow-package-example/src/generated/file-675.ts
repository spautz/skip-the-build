export type Thing675<T> = T extends infer U ? U[] : never;

export const value675: Thing675<number> = [675];
