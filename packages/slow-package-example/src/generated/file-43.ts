export type Thing43<T> = T extends infer U ? U[] : never;

export const value43: Thing43<number> = [43];
