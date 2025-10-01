export interface weatherResponse {
    weather: weather[];
    main: main;
    name: string;
}
export interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
}