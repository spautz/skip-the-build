export type Thing1525<T> = T extends infer U ? U[] : never;

export const value1525: Thing1525<number> = [1525];
