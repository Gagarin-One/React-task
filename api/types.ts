export type loginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  userName: string;
} & loginDto;

export type ResponceUser ={
  id:number
  userName:string
  email:string
  access_token:string
}