export type Thing1838<T> = T extends infer U ? U[] : never;

export const value1838: Thing1838<number> = [1838];
