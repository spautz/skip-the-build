export type Thing345<T> = T extends infer U ? U[] : never;

export const value345: Thing345<number> = [345];
