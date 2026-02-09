export type Thing409<T> = T extends infer U ? U[] : never;

export const value409: Thing409<number> = [409];
