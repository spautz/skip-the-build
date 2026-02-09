export type Thing171<T> = T extends infer U ? U[] : never;

export const value171: Thing171<number> = [171];
