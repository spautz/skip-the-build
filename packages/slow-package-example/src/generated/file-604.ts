export type Thing604<T> = T extends infer U ? U[] : never;

export const value604: Thing604<number> = [604];
