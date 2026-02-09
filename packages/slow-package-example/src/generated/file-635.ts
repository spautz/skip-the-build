export type Thing635<T> = T extends infer U ? U[] : never;

export const value635: Thing635<number> = [635];
