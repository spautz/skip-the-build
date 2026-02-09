export type Thing375<T> = T extends infer U ? U[] : never;

export const value375: Thing375<number> = [375];
