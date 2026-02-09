export type Thing979<T> = T extends infer U ? U[] : never;

export const value979: Thing979<number> = [979];
