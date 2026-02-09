export type Thing126<T> = T extends infer U ? U[] : never;

export const value126: Thing126<number> = [126];
