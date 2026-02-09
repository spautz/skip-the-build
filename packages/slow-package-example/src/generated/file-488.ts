export type Thing488<T> = T extends infer U ? U[] : never;

export const value488: Thing488<number> = [488];
