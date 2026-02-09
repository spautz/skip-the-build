export type Thing172<T> = T extends infer U ? U[] : never;

export const value172: Thing172<number> = [172];
