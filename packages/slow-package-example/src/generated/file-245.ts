export type Thing245<T> = T extends infer U ? U[] : never;

export const value245: Thing245<number> = [245];
