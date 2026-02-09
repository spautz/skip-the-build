export type Thing1426<T> = T extends infer U ? U[] : never;

export const value1426: Thing1426<number> = [1426];
