export type Thing58<T> = T extends infer U ? U[] : never;

export const value58: Thing58<number> = [58];
