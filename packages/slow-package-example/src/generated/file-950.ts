export type Thing950<T> = T extends infer U ? U[] : never;

export const value950: Thing950<number> = [950];
