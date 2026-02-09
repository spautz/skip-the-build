export type Thing441<T> = T extends infer U ? U[] : never;

export const value441: Thing441<number> = [441];
