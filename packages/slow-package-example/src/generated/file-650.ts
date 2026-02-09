export type Thing650<T> = T extends infer U ? U[] : never;

export const value650: Thing650<number> = [650];
