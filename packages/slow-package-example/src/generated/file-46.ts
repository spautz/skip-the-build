export type Thing46<T> = T extends infer U ? U[] : never;

export const value46: Thing46<number> = [46];
