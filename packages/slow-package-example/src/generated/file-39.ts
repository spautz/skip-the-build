export type Thing39<T> = T extends infer U ? U[] : never;

export const value39: Thing39<number> = [39];
