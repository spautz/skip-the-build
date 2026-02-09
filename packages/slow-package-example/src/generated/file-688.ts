export type Thing688<T> = T extends infer U ? U[] : never;

export const value688: Thing688<number> = [688];
