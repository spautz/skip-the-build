export type Thing1436<T> = T extends infer U ? U[] : never;

export const value1436: Thing1436<number> = [1436];
