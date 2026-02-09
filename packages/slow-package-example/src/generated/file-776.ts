export type Thing776<T> = T extends infer U ? U[] : never;

export const value776: Thing776<number> = [776];
