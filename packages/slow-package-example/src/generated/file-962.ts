export type Thing962<T> = T extends infer U ? U[] : never;

export const value962: Thing962<number> = [962];
