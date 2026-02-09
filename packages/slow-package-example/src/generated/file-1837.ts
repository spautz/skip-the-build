export type Thing1837<T> = T extends infer U ? U[] : never;

export const value1837: Thing1837<number> = [1837];
