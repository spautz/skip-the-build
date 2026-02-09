export type Thing521<T> = T extends infer U ? U[] : never;

export const value521: Thing521<number> = [521];
