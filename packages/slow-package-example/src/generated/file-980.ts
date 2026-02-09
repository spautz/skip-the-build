export type Thing980<T> = T extends infer U ? U[] : never;

export const value980: Thing980<number> = [980];
