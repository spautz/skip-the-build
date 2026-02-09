export type Thing1389<T> = T extends infer U ? U[] : never;

export const value1389: Thing1389<number> = [1389];
