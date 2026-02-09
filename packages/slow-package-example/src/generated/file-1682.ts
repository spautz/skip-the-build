export type Thing1682<T> = T extends infer U ? U[] : never;

export const value1682: Thing1682<number> = [1682];
