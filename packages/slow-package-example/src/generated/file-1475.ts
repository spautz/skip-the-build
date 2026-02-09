export type Thing1475<T> = T extends infer U ? U[] : never;

export const value1475: Thing1475<number> = [1475];
