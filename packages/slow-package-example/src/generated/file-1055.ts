export type Thing1055<T> = T extends infer U ? U[] : never;

export const value1055: Thing1055<number> = [1055];
