export type Thing1614<T> = T extends infer U ? U[] : never;

export const value1614: Thing1614<number> = [1614];
