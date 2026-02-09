export type Thing2745<T> = T extends infer U ? U[] : never;

export const value2745: Thing2745<number> = [2745];
