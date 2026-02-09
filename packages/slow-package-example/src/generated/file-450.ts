export type Thing450<T> = T extends infer U ? U[] : never;

export const value450: Thing450<number> = [450];
