export type Thing1414<T> = T extends infer U ? U[] : never;

export const value1414: Thing1414<number> = [1414];
