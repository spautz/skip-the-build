export type Thing843<T> = T extends infer U ? U[] : never;

export const value843: Thing843<number> = [843];
