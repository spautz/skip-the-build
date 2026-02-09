export type Thing963<T> = T extends infer U ? U[] : never;

export const value963: Thing963<number> = [963];
