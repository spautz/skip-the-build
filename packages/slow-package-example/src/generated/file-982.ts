export type Thing982<T> = T extends infer U ? U[] : never;

export const value982: Thing982<number> = [982];
