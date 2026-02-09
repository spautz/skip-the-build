export type Thing2432<T> = T extends infer U ? U[] : never;

export const value2432: Thing2432<number> = [2432];
