export interface MovieDiscoverItem {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[]; //any;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface MovieDiscoverResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieDiscoverItem[];
}