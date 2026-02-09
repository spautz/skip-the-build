export type Thing1141<T> = T extends infer U ? U[] : never;

export const value1141: Thing1141<number> = [1141];
