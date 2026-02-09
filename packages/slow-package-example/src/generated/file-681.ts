export type Thing681<T> = T extends infer U ? U[] : never;

export const value681: Thing681<number> = [681];
