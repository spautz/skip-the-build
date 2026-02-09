export type Thing1445<T> = T extends infer U ? U[] : never;

export const value1445: Thing1445<number> = [1445];
