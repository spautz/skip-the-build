export type Thing754<T> = T extends infer U ? U[] : never;

export const value754: Thing754<number> = [754];
