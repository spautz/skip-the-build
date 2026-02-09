export type Thing2502<T> = T extends infer U ? U[] : never;

export const value2502: Thing2502<number> = [2502];
