export type Thing865<T> = T extends infer U ? U[] : never;

export const value865: Thing865<number> = [865];
