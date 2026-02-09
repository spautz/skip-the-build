export type Thing1513<T> = T extends infer U ? U[] : never;

export const value1513: Thing1513<number> = [1513];
