export type Thing640<T> = T extends infer U ? U[] : never;

export const value640: Thing640<number> = [640];
