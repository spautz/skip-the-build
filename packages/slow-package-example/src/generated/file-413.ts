export type Thing413<T> = T extends infer U ? U[] : never;

export const value413: Thing413<number> = [413];
