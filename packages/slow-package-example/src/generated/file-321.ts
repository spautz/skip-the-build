export type Thing321<T> = T extends infer U ? U[] : never;

export const value321: Thing321<number> = [321];
