export type Thing432<T> = T extends infer U ? U[] : never;

export const value432: Thing432<number> = [432];
