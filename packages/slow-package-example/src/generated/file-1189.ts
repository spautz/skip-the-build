export type Thing1189<T> = T extends infer U ? U[] : never;

export const value1189: Thing1189<number> = [1189];
