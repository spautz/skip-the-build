export type Thing520<T> = T extends infer U ? U[] : never;

export const value520: Thing520<number> = [520];
