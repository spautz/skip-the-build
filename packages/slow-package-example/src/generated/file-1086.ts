export type Thing1086<T> = T extends infer U ? U[] : never;

export const value1086: Thing1086<number> = [1086];
