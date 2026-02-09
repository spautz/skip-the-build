export type Thing281<T> = T extends infer U ? U[] : never;

export const value281: Thing281<number> = [281];
