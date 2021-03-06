export interface MovieDiscoverRequest{
    language?: string;
    region?: string;
    sort_by?: string;
    certification_country?: string;
    certification?: string;
    include_adult?: boolean;
    include_video?: boolean;
    page?: number;
    primary_release_year?: number;
    primary_release_date?: string;
    release_date?: string;
    with_release_type?: number;
    year?: number;
    with_people?: string;
    with_companies?: string;
    with_genres?: string;
    without_genres?: string;
    with_keywords?: string;
    without_keywords?: string;
    with_original_language?: string;
}