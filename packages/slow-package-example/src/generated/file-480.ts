export type Thing480<T> = T extends infer U ? U[] : never;

export const value480: Thing480<number> = [480];
