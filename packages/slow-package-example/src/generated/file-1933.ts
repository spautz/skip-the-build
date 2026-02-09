export type Thing1933<T> = T extends infer U ? U[] : never;

export const value1933: Thing1933<number> = [1933];
