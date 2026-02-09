export type Thing65<T> = T extends infer U ? U[] : never;

export const value65: Thing65<number> = [65];
