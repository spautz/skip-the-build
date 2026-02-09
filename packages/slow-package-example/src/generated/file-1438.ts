export type Thing1438<T> = T extends infer U ? U[] : never;

export const value1438: Thing1438<number> = [1438];
