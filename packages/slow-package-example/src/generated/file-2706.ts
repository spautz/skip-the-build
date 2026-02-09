export type Thing2706<T> = T extends infer U ? U[] : never;

export const value2706: Thing2706<number> = [2706];
