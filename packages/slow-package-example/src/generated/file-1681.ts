export type Thing1681<T> = T extends infer U ? U[] : never;

export const value1681: Thing1681<number> = [1681];
