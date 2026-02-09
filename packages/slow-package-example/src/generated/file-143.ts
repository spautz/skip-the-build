export type Thing143<T> = T extends infer U ? U[] : never;

export const value143: Thing143<number> = [143];
