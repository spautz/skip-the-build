export type Thing1950<T> = T extends infer U ? U[] : never;

export const value1950: Thing1950<number> = [1950];
