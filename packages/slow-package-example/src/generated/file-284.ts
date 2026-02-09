export type Thing284<T> = T extends infer U ? U[] : never;

export const value284: Thing284<number> = [284];
