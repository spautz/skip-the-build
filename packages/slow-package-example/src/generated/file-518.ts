export type Thing518<T> = T extends infer U ? U[] : never;

export const value518: Thing518<number> = [518];
