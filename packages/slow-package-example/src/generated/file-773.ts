export type Thing773<T> = T extends infer U ? U[] : never;

export const value773: Thing773<number> = [773];
