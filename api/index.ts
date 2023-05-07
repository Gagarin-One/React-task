import axios from 'axios';
import { CreateUserDto, loginDto, ResponceUser } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const userApi = {
  async register(dto: CreateUserDto): Promise<ResponceUser> {
    const { data } = await instance.post<CreateUserDto, { data: ResponceUser }>(
      'auth/register',
      dto,
    );
    return data;
  },

  async login(dto: loginDto): Promise<ResponceUser> {
    const { data } = await instance.post<loginDto, { data: ResponceUser }>('auth/login', dto);
    return data;
  },
};
