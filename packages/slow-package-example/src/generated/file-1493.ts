export type Thing1493<T> = T extends infer U ? U[] : never;

export const value1493: Thing1493<number> = [1493];
