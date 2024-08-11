import axios from 'axios';

export const axiosInstence = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL,
});
