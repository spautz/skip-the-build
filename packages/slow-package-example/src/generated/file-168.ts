export type Thing168<T> = T extends infer U ? U[] : never;

export const value168: Thing168<number> = [168];
