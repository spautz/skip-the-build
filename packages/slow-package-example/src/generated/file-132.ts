export type Thing132<T> = T extends infer U ? U[] : never;

export const value132: Thing132<number> = [132];
