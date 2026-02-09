export type Thing29<T> = T extends infer U ? U[] : never;

export const value29: Thing29<number> = [29];
