export type Thing1400<T> = T extends infer U ? U[] : never;

export const value1400: Thing1400<number> = [1400];
