export type Thing236<T> = T extends infer U ? U[] : never;

export const value236: Thing236<number> = [236];
