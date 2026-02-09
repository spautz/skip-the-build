export type Thing1016<T> = T extends infer U ? U[] : never;

export const value1016: Thing1016<number> = [1016];
