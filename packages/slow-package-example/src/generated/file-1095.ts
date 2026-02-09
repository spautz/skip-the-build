export type Thing1095<T> = T extends infer U ? U[] : never;

export const value1095: Thing1095<number> = [1095];
