export type Thing762<T> = T extends infer U ? U[] : never;

export const value762: Thing762<number> = [762];
