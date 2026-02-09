export type Thing1740<T> = T extends infer U ? U[] : never;

export const value1740: Thing1740<number> = [1740];
