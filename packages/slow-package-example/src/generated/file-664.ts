export type Thing664<T> = T extends infer U ? U[] : never;

export const value664: Thing664<number> = [664];
