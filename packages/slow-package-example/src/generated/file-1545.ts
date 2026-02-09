export type Thing1545<T> = T extends infer U ? U[] : never;

export const value1545: Thing1545<number> = [1545];
