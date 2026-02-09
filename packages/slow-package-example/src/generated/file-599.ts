export type Thing599<T> = T extends infer U ? U[] : never;

export const value599: Thing599<number> = [599];
