export type Thing288<T> = T extends infer U ? U[] : never;

export const value288: Thing288<number> = [288];
