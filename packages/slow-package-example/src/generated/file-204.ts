export type Thing204<T> = T extends infer U ? U[] : never;

export const value204: Thing204<number> = [204];
