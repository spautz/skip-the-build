export type Thing714<T> = T extends infer U ? U[] : never;

export const value714: Thing714<number> = [714];
