export type Thing512<T> = T extends infer U ? U[] : never;

export const value512: Thing512<number> = [512];
