export type Thing255<T> = T extends infer U ? U[] : never;

export const value255: Thing255<number> = [255];
