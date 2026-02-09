export type Thing20<T> = T extends infer U ? U[] : never;

export const value20: Thing20<number> = [20];
