export type Thing679<T> = T extends infer U ? U[] : never;

export const value679: Thing679<number> = [679];
