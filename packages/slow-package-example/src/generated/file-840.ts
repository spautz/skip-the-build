export type Thing840<T> = T extends infer U ? U[] : never;

export const value840: Thing840<number> = [840];
