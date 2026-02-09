export type Thing340<T> = T extends infer U ? U[] : never;

export const value340: Thing340<number> = [340];
