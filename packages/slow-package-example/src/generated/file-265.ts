export type Thing265<T> = T extends infer U ? U[] : never;

export const value265: Thing265<number> = [265];
