export type Thing1142<T> = T extends infer U ? U[] : never;

export const value1142: Thing1142<number> = [1142];
