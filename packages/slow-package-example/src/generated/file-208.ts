export type Thing208<T> = T extends infer U ? U[] : never;

export const value208: Thing208<number> = [208];
