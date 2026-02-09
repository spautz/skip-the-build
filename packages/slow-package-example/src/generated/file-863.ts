export type Thing863<T> = T extends infer U ? U[] : never;

export const value863: Thing863<number> = [863];
