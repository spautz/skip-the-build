export type Thing282<T> = T extends infer U ? U[] : never;

export const value282: Thing282<number> = [282];
