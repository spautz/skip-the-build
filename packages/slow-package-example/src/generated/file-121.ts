export type Thing121<T> = T extends infer U ? U[] : never;

export const value121: Thing121<number> = [121];
