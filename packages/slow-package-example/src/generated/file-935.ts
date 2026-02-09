export type Thing935<T> = T extends infer U ? U[] : never;

export const value935: Thing935<number> = [935];
