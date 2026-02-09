export type Thing244<T> = T extends infer U ? U[] : never;

export const value244: Thing244<number> = [244];
