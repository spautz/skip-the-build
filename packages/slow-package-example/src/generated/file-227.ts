export type Thing227<T> = T extends infer U ? U[] : never;

export const value227: Thing227<number> = [227];
