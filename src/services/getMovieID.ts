import axios, {AxiosResponse} from "axios";

const getMovieID = (id?: string): Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/shows/${id}`);

export default getMovieID;