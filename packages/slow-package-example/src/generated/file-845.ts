export type Thing845<T> = T extends infer U ? U[] : never;

export const value845: Thing845<number> = [845];
