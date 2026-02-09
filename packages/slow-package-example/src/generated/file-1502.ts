export type Thing1502<T> = T extends infer U ? U[] : never;

export const value1502: Thing1502<number> = [1502];
