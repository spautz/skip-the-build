export type Thing435<T> = T extends infer U ? U[] : never;

export const value435: Thing435<number> = [435];
