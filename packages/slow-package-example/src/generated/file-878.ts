export type Thing878<T> = T extends infer U ? U[] : never;

export const value878: Thing878<number> = [878];
