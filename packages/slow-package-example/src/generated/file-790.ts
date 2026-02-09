export type Thing790<T> = T extends infer U ? U[] : never;

export const value790: Thing790<number> = [790];
