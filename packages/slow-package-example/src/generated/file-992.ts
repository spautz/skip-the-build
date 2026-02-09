export type Thing992<T> = T extends infer U ? U[] : never;

export const value992: Thing992<number> = [992];
