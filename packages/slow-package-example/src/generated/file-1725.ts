export type Thing1725<T> = T extends infer U ? U[] : never;

export const value1725: Thing1725<number> = [1725];
