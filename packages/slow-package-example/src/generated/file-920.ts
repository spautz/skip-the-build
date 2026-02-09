export type Thing920<T> = T extends infer U ? U[] : never;

export const value920: Thing920<number> = [920];
