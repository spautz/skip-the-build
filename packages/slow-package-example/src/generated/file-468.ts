export type Thing468<T> = T extends infer U ? U[] : never;

export const value468: Thing468<number> = [468];
