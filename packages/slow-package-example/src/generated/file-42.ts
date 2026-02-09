export type Thing42<T> = T extends infer U ? U[] : never;

export const value42: Thing42<number> = [42];
