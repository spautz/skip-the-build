export type Thing280<T> = T extends infer U ? U[] : never;

export const value280: Thing280<number> = [280];
