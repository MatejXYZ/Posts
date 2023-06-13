export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
};

export type Comment = {
  name: string;
  body: string;
  email: string;
};
