export type Thing919<T> = T extends infer U ? U[] : never;

export const value919: Thing919<number> = [919];
