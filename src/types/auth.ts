interface User {
  email: string;
  password: string;
  name: string;
}

export interface UserResponse {
  message: string;
  token: string;
  status: string;
  data: User;
}
