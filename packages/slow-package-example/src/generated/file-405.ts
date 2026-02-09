export type Thing405<T> = T extends infer U ? U[] : never;

export const value405: Thing405<number> = [405];
