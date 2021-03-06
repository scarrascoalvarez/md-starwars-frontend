export interface PaginatedStarships {
    count: number;
    next: string;
    previous: null;
    results: Starship[];
}

export interface Starship {
    id?: any;
    image?: string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: any[] | Film[];
    created: Date | string;
    edited: Date | string; 
    url: string;
}

export interface Film {
    id: any;
    image: string;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date | string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date | string;
    edited: Date | string;
    url: string;
}
