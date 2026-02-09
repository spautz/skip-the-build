export type Thing14<T> = T extends infer U ? U[] : never;

export const value14: Thing14<number> = [14];
