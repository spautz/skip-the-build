export type Thing389<T> = T extends infer U ? U[] : never;

export const value389: Thing389<number> = [389];
