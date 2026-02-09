export type Thing1913<T> = T extends infer U ? U[] : never;

export const value1913: Thing1913<number> = [1913];
