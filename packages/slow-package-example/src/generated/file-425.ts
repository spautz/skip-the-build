export type Thing425<T> = T extends infer U ? U[] : never;

export const value425: Thing425<number> = [425];
