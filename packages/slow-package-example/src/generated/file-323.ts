export type Thing323<T> = T extends infer U ? U[] : never;

export const value323: Thing323<number> = [323];
