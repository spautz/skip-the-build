export type Thing7<T> = T extends infer U ? U[] : never;

export const value7: Thing7<number> = [7];
