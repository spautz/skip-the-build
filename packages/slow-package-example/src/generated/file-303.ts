export type Thing303<T> = T extends infer U ? U[] : never;

export const value303: Thing303<number> = [303];
