export type Thing707<T> = T extends infer U ? U[] : never;

export const value707: Thing707<number> = [707];
