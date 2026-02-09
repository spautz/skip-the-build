export type Thing1175<T> = T extends infer U ? U[] : never;

export const value1175: Thing1175<number> = [1175];
