export type Thing240<T> = T extends infer U ? U[] : never;

export const value240: Thing240<number> = [240];
