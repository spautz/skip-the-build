export type Thing970<T> = T extends infer U ? U[] : never;

export const value970: Thing970<number> = [970];
