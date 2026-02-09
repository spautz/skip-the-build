export type Thing404<T> = T extends infer U ? U[] : never;

export const value404: Thing404<number> = [404];
