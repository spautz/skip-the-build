export type Thing162<T> = T extends infer U ? U[] : never;

export const value162: Thing162<number> = [162];
