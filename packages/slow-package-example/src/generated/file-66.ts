export type Thing66<T> = T extends infer U ? U[] : never;

export const value66: Thing66<number> = [66];
