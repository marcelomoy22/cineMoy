export class Movie{

    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public id: number,
        public original_language: string,
        public original_title: string,
        public popularity: number,
        public poster_path: string,
        public title: string,
        public vote_average: number,
        public vote_count: number,
    ){

    }
}