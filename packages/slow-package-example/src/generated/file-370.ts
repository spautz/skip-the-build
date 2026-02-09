export type Thing370<T> = T extends infer U ? U[] : never;

export const value370: Thing370<number> = [370];
