export type Thing806<T> = T extends infer U ? U[] : never;

export const value806: Thing806<number> = [806];
