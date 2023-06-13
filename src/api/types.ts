export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  username: string;
};

export type Comment = {
  id: number;
  postId: number;
  name: string;
  body: string;
};
