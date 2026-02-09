export type Thing412<T> = T extends infer U ? U[] : never;

export const value412: Thing412<number> = [412];
