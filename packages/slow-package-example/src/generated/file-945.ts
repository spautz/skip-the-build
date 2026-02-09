export type Thing945<T> = T extends infer U ? U[] : never;

export const value945: Thing945<number> = [945];
