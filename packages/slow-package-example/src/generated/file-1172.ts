export type Thing1172<T> = T extends infer U ? U[] : never;

export const value1172: Thing1172<number> = [1172];
