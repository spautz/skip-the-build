export type Thing325<T> = T extends infer U ? U[] : never;

export const value325: Thing325<number> = [325];
