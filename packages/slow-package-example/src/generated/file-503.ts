export type Thing503<T> = T extends infer U ? U[] : never;

export const value503: Thing503<number> = [503];
