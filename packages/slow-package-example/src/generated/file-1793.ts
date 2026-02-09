export type Thing1793<T> = T extends infer U ? U[] : never;

export const value1793: Thing1793<number> = [1793];
