export type Thing1066<T> = T extends infer U ? U[] : never;

export const value1066: Thing1066<number> = [1066];
