export type Thing813<T> = T extends infer U ? U[] : never;

export const value813: Thing813<number> = [813];
