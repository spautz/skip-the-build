export type Thing538<T> = T extends infer U ? U[] : never;

export const value538: Thing538<number> = [538];
