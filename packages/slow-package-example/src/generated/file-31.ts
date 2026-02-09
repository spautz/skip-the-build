export type Thing31<T> = T extends infer U ? U[] : never;

export const value31: Thing31<number> = [31];
