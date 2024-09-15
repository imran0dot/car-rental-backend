export interface TUser {
  name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TLoginUser extends Pick<TUser, 'email' | 'password'> { }
export interface TLoginInfo {
  _id: any;
  email: string,
  role: string
}
