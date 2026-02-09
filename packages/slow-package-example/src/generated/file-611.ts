export type Thing611<T> = T extends infer U ? U[] : never;

export const value611: Thing611<number> = [611];
