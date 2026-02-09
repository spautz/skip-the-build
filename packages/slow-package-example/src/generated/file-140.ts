export type Thing140<T> = T extends infer U ? U[] : never;

export const value140: Thing140<number> = [140];
