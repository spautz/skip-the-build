export type Thing1609<T> = T extends infer U ? U[] : never;

export const value1609: Thing1609<number> = [1609];
