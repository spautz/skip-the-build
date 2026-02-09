export type Thing785<T> = T extends infer U ? U[] : never;

export const value785: Thing785<number> = [785];
