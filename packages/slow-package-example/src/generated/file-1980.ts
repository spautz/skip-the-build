export type Thing1980<T> = T extends infer U ? U[] : never;

export const value1980: Thing1980<number> = [1980];
