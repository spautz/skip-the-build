export type Thing2823<T> = T extends infer U ? U[] : never;

export const value2823: Thing2823<number> = [2823];
