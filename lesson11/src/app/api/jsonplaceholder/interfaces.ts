export interface Post {
  userId: number;
  id: number;
  body: string;
  title: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
