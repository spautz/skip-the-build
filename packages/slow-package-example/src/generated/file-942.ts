export type Thing942<T> = T extends infer U ? U[] : never;

export const value942: Thing942<number> = [942];
