export type Thing238<T> = T extends infer U ? U[] : never;

export const value238: Thing238<number> = [238];
