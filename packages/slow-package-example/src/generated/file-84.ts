export type Thing84<T> = T extends infer U ? U[] : never;

export const value84: Thing84<number> = [84];
