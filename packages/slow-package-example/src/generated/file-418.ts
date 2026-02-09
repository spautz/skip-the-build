export type Thing418<T> = T extends infer U ? U[] : never;

export const value418: Thing418<number> = [418];
