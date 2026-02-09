export type Thing621<T> = T extends infer U ? U[] : never;

export const value621: Thing621<number> = [621];
