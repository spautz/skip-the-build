export type Thing612<T> = T extends infer U ? U[] : never;

export const value612: Thing612<number> = [612];
