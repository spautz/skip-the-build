export type Thing165<T> = T extends infer U ? U[] : never;

export const value165: Thing165<number> = [165];
