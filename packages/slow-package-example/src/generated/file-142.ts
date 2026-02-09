export type Thing142<T> = T extends infer U ? U[] : never;

export const value142: Thing142<number> = [142];
