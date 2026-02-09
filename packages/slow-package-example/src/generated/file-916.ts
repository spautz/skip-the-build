export type Thing916<T> = T extends infer U ? U[] : never;

export const value916: Thing916<number> = [916];
