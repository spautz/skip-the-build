export type Thing502<T> = T extends infer U ? U[] : never;

export const value502: Thing502<number> = [502];
