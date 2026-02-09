export type Thing12<T> = T extends infer U ? U[] : never;

export const value12: Thing12<number> = [12];
