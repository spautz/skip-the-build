export type Thing311<T> = T extends infer U ? U[] : never;

export const value311: Thing311<number> = [311];
