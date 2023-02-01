import axios, {AxiosResponse} from "axios";

const getAllMovies = (): Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/shows`);

export default getAllMovies;