export type Thing67<T> = T extends infer U ? U[] : never;

export const value67: Thing67<number> = [67];
