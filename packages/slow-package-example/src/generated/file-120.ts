export type Thing120<T> = T extends infer U ? U[] : never;

export const value120: Thing120<number> = [120];
