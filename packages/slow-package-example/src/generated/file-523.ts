export type Thing523<T> = T extends infer U ? U[] : never;

export const value523: Thing523<number> = [523];
