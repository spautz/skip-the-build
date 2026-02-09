export type Thing883<T> = T extends infer U ? U[] : never;

export const value883: Thing883<number> = [883];
