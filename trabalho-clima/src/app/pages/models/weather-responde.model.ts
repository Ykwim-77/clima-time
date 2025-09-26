export interface weatherResponse {
    weather: weather[];
    main: main;
}
export interface weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface main {
    temp: number;
}