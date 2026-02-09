export type Thing19<T> = T extends infer U ? U[] : never;

export const value19: Thing19<number> = [19];
