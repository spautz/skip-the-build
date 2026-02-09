export type Thing27<T> = T extends infer U ? U[] : never;

export const value27: Thing27<number> = [27];
