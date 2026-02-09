export type Thing127<T> = T extends infer U ? U[] : never;

export const value127: Thing127<number> = [127];
