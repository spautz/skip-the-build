export type Thing830<T> = T extends infer U ? U[] : never;

export const value830: Thing830<number> = [830];
