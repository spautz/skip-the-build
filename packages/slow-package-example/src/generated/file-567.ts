export type Thing567<T> = T extends infer U ? U[] : never;

export const value567: Thing567<number> = [567];
