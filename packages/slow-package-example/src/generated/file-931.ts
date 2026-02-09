export type Thing931<T> = T extends infer U ? U[] : never;

export const value931: Thing931<number> = [931];
