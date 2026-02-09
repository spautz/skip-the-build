export type Thing1691<T> = T extends infer U ? U[] : never;

export const value1691: Thing1691<number> = [1691];
