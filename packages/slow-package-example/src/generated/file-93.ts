export type Thing93<T> = T extends infer U ? U[] : never;

export const value93: Thing93<number> = [93];
