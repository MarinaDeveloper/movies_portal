export interface IMovieItem {
    name: string,
    airdate: string,
    show: IMovieShowItem
}

export interface IMovieShowItem {
    id: number,
    genres: Array<string>,
    rating: {
        average: number
    },
    premiered: string,
    image: {
        medium: string,
        original: string
    },
    name: string,
    network: {
        country: {
            code: string,
            name: string
        }
    }, 
    summary: HTMLElement
}