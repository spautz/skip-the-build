export type Thing933<T> = T extends infer U ? U[] : never;

export const value933: Thing933<number> = [933];
