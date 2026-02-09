export type Thing55<T> = T extends infer U ? U[] : never;

export const value55: Thing55<number> = [55];
