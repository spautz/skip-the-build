export type Thing828<T> = T extends infer U ? U[] : never;

export const value828: Thing828<number> = [828];
