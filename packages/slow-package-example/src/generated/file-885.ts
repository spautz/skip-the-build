export type Thing885<T> = T extends infer U ? U[] : never;

export const value885: Thing885<number> = [885];
