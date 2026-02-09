export type Thing1839<T> = T extends infer U ? U[] : never;

export const value1839: Thing1839<number> = [1839];
