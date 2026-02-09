export type Thing1024<T> = T extends infer U ? U[] : never;

export const value1024: Thing1024<number> = [1024];
