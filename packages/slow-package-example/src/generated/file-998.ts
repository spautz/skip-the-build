export type Thing998<T> = T extends infer U ? U[] : never;

export const value998: Thing998<number> = [998];
