export type Thing723<T> = T extends infer U ? U[] : never;

export const value723: Thing723<number> = [723];
