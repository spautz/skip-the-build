export type Thing260<T> = T extends infer U ? U[] : never;

export const value260: Thing260<number> = [260];
