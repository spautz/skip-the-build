export type Thing666<T> = T extends infer U ? U[] : never;

export const value666: Thing666<number> = [666];
