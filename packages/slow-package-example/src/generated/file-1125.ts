export type Thing1125<T> = T extends infer U ? U[] : never;

export const value1125: Thing1125<number> = [1125];
