export type Thing364<T> = T extends infer U ? U[] : never;

export const value364: Thing364<number> = [364];
