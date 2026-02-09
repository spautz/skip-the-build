export type Thing1065<T> = T extends infer U ? U[] : never;

export const value1065: Thing1065<number> = [1065];
