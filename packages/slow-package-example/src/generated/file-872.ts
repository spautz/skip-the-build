export type Thing872<T> = T extends infer U ? U[] : never;

export const value872: Thing872<number> = [872];
