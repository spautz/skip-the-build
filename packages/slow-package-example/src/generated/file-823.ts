export type Thing823<T> = T extends infer U ? U[] : never;

export const value823: Thing823<number> = [823];
