export type Thing201<T> = T extends infer U ? U[] : never;

export const value201: Thing201<number> = [201];
