export type Thing743<T> = T extends infer U ? U[] : never;

export const value743: Thing743<number> = [743];
