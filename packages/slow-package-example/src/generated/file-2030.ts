export type Thing2030<T> = T extends infer U ? U[] : never;

export const value2030: Thing2030<number> = [2030];
