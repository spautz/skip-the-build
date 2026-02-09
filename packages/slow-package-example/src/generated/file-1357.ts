export type Thing1357<T> = T extends infer U ? U[] : never;

export const value1357: Thing1357<number> = [1357];
