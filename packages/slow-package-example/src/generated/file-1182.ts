export type Thing1182<T> = T extends infer U ? U[] : never;

export const value1182: Thing1182<number> = [1182];
