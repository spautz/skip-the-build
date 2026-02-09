export type Thing975<T> = T extends infer U ? U[] : never;

export const value975: Thing975<number> = [975];
