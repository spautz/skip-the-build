export type Thing329<T> = T extends infer U ? U[] : never;

export const value329: Thing329<number> = [329];
