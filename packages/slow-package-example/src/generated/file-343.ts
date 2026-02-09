export type Thing343<T> = T extends infer U ? U[] : never;

export const value343: Thing343<number> = [343];
