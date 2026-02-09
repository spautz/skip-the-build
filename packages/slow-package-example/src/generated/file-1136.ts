export type Thing1136<T> = T extends infer U ? U[] : never;

export const value1136: Thing1136<number> = [1136];
