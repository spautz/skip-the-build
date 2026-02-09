export type Thing1203<T> = T extends infer U ? U[] : never;

export const value1203: Thing1203<number> = [1203];
