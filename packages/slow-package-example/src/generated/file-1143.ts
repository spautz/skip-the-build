export type Thing1143<T> = T extends infer U ? U[] : never;

export const value1143: Thing1143<number> = [1143];
