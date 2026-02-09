export type Thing890<T> = T extends infer U ? U[] : never;

export const value890: Thing890<number> = [890];
