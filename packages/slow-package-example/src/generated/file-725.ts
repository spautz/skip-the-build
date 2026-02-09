export type Thing725<T> = T extends infer U ? U[] : never;

export const value725: Thing725<number> = [725];
