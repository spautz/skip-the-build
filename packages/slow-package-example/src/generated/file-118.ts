export type Thing118<T> = T extends infer U ? U[] : never;

export const value118: Thing118<number> = [118];
