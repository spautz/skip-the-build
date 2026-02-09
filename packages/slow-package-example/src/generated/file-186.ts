export type Thing186<T> = T extends infer U ? U[] : never;

export const value186: Thing186<number> = [186];
