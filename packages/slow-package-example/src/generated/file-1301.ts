export type Thing1301<T> = T extends infer U ? U[] : never;

export const value1301: Thing1301<number> = [1301];
