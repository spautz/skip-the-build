export type Thing1823<T> = T extends infer U ? U[] : never;

export const value1823: Thing1823<number> = [1823];
