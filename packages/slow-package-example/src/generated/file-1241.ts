export type Thing1241<T> = T extends infer U ? U[] : never;

export const value1241: Thing1241<number> = [1241];
