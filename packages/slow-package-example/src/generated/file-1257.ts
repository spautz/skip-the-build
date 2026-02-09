export type Thing1257<T> = T extends infer U ? U[] : never;

export const value1257: Thing1257<number> = [1257];
