export type Thing608<T> = T extends infer U ? U[] : never;

export const value608: Thing608<number> = [608];
