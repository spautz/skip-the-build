export type Thing1260<T> = T extends infer U ? U[] : never;

export const value1260: Thing1260<number> = [1260];
