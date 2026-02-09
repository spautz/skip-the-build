export type Thing778<T> = T extends infer U ? U[] : never;

export const value778: Thing778<number> = [778];
