export type Thing724<T> = T extends infer U ? U[] : never;

export const value724: Thing724<number> = [724];
