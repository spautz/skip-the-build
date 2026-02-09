export type Thing51<T> = T extends infer U ? U[] : never;

export const value51: Thing51<number> = [51];
