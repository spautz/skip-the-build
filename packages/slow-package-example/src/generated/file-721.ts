export type Thing721<T> = T extends infer U ? U[] : never;

export const value721: Thing721<number> = [721];
