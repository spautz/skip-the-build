export type Thing605<T> = T extends infer U ? U[] : never;

export const value605: Thing605<number> = [605];
