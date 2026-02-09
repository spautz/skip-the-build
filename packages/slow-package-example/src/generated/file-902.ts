export type Thing902<T> = T extends infer U ? U[] : never;

export const value902: Thing902<number> = [902];
