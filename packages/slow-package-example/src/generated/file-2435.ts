export type Thing2435<T> = T extends infer U ? U[] : never;

export const value2435: Thing2435<number> = [2435];
