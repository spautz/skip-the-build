export type Thing531<T> = T extends infer U ? U[] : never;

export const value531: Thing531<number> = [531];
