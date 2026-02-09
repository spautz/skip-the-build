export type Thing960<T> = T extends infer U ? U[] : never;

export const value960: Thing960<number> = [960];
