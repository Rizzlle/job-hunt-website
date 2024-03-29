import axios from "axios";

export const api = axios.create({
	baseURL: "",
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
