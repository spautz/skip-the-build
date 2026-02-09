export type Thing1435<T> = T extends infer U ? U[] : never;

export const value1435: Thing1435<number> = [1435];
