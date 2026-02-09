export type Thing153<T> = T extends infer U ? U[] : never;

export const value153: Thing153<number> = [153];
