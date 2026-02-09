export type Thing1976<T> = T extends infer U ? U[] : never;

export const value1976: Thing1976<number> = [1976];
