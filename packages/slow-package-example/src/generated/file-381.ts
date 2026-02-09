export type Thing381<T> = T extends infer U ? U[] : never;

export const value381: Thing381<number> = [381];
