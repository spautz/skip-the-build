export type Thing638<T> = T extends infer U ? U[] : never;

export const value638: Thing638<number> = [638];
