export type Thing2048<T> = T extends infer U ? U[] : never;

export const value2048: Thing2048<number> = [2048];
