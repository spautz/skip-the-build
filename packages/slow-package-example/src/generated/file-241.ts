export type Thing241<T> = T extends infer U ? U[] : never;

export const value241: Thing241<number> = [241];
