export type Thing820<T> = T extends infer U ? U[] : never;

export const value820: Thing820<number> = [820];
