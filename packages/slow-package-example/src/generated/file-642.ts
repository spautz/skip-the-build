export type Thing642<T> = T extends infer U ? U[] : never;

export const value642: Thing642<number> = [642];
