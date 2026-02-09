export type Thing1775<T> = T extends infer U ? U[] : never;

export const value1775: Thing1775<number> = [1775];
