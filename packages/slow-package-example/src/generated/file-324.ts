export type Thing324<T> = T extends infer U ? U[] : never;

export const value324: Thing324<number> = [324];
