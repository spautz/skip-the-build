export type Thing1246<T> = T extends infer U ? U[] : never;

export const value1246: Thing1246<number> = [1246];
