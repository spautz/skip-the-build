export type Thing1037<T> = T extends infer U ? U[] : never;

export const value1037: Thing1037<number> = [1037];
