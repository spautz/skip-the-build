export type Thing40<T> = T extends infer U ? U[] : never;

export const value40: Thing40<number> = [40];
