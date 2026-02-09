export type Thing417<T> = T extends infer U ? U[] : never;

export const value417: Thing417<number> = [417];
