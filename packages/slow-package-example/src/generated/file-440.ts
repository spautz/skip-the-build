export type Thing440<T> = T extends infer U ? U[] : never;

export const value440: Thing440<number> = [440];
