export type Thing41<T> = T extends infer U ? U[] : never;

export const value41: Thing41<number> = [41];
