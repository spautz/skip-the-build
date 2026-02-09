export type Thing390<T> = T extends infer U ? U[] : never;

export const value390: Thing390<number> = [390];
