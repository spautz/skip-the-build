export type Thing219<T> = T extends infer U ? U[] : never;

export const value219: Thing219<number> = [219];
