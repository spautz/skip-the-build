export type Thing115<T> = T extends infer U ? U[] : never;

export const value115: Thing115<number> = [115];
