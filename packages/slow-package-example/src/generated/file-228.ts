export type Thing228<T> = T extends infer U ? U[] : never;

export const value228: Thing228<number> = [228];
