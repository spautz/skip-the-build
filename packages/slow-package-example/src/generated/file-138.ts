export type Thing138<T> = T extends infer U ? U[] : never;

export const value138: Thing138<number> = [138];
