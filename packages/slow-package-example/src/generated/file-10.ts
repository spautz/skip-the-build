export type Thing10<T> = T extends infer U ? U[] : never;

export const value10: Thing10<number> = [10];
