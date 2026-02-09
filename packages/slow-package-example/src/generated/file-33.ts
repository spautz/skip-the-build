export type Thing33<T> = T extends infer U ? U[] : never;

export const value33: Thing33<number> = [33];
