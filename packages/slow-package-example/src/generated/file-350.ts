export type Thing350<T> = T extends infer U ? U[] : never;

export const value350: Thing350<number> = [350];
