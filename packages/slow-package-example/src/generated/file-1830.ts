export type Thing1830<T> = T extends infer U ? U[] : never;

export const value1830: Thing1830<number> = [1830];
