export type Thing768<T> = T extends infer U ? U[] : never;

export const value768: Thing768<number> = [768];
