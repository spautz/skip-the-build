export type Thing1127<T> = T extends infer U ? U[] : never;

export const value1127: Thing1127<number> = [1127];
