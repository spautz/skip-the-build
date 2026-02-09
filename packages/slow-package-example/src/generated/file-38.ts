export type Thing38<T> = T extends infer U ? U[] : never;

export const value38: Thing38<number> = [38];
