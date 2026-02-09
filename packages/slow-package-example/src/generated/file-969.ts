export type Thing969<T> = T extends infer U ? U[] : never;

export const value969: Thing969<number> = [969];
