
export interface LoginForm {
    email: string;
    password: string;
  }
  

export interface RegisterForm {
  name: string;
  email: string;
  genero: string;
  dataNasci: string;
  bio?: string;
  profilePicture?: FileList;
}