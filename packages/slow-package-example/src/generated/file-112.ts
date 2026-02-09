export type Thing112<T> = T extends infer U ? U[] : never;

export const value112: Thing112<number> = [112];
