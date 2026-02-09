export type Thing49<T> = T extends infer U ? U[] : never;

export const value49: Thing49<number> = [49];
