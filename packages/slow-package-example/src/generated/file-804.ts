export type Thing804<T> = T extends infer U ? U[] : never;

export const value804: Thing804<number> = [804];
