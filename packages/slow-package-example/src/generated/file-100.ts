export type Thing100<T> = T extends infer U ? U[] : never;

export const value100: Thing100<number> = [100];
