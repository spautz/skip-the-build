export type Thing180<T> = T extends infer U ? U[] : never;

export const value180: Thing180<number> = [180];
